const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;

const GITHUB_CLIENT_ID = 'a111809de9f86c55b689';
const GITHUB_CLIENT_SECRET = 'f0f2dd385861bf5de0428de4e51ba532ec719891';

const db = require('./models');

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

passport.use(new GitHubStrategy({
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/github/callback'
},
function (accessToken, refreshToken, profile, done) {
  console.log({ accessToken });
  // if user exsists return userID, if user does not exsist we want to return insert user into user table and return id
  const getUserQueryString = `
    SELECT u.user_id
    FROM public.user u
    WHERE github_id=$1
    LIMIT 1
    `;
  const params = [profile.username];
  const stringToNumber = (str) => {
    str = str.toLowerCase();
    return str.slice(0, 5).split('').map(c => {
      if(c.match(/[^a-zA-Z]/)) return '';
      return c.charCodeAt(0) - 97;
    })
      .join('');
  };

  db.query(getUserQueryString, params)
    .then(r => {
      console.log(r);
      if(r.rows.length > 0) return r.rows[0].user_id;
      return null;
    })
    .then((response) => {
      if(response){
        console.log(`user id for ${profile.username} found. ID: ${response}`);
        return done(null, response);
      }
      console.log(`user id for ${profile.username} not found.`);
      const insertUserQuery = `
        INSERT INTO public.user (user_id, github_id)
        VALUES ($1, $2)
        RETURNING user_id`;
      const params = [Number(stringToNumber(profile.username)), profile.username];
      db.query(insertUserQuery, params)
        .then(r => r.rows[0].user_id)
        .then(response => {
          console.log(`Created new user in DB for ${profile.username} not found. ID: ${response}`);
          return done(null, response);
        });
    });
}
));

module.exports = passport;