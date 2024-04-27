const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
const serviceAccount = require('../path/to/your/serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://gym-management-system-25648-default-rtdb.firebaseio.com" // Use your database URL
});

const auth = admin.auth();

const authUtils = {
  verifyToken: async (req, res, next) => {
    try {
      const idToken = req.headers.authorization;
      const decodedToken = await auth.verifyIdToken(idToken);
      req.user = decodedToken;
      next();
    } catch (error) {
      console.error("Error verifying token:", error);
      res.status(401).json({ message: 'Unauthorized' });
    }
  },
  // Other authentication utility functions...
};

module.exports = authUtils;
