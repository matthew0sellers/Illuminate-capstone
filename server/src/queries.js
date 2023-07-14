const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "144736",
  port: 5432,
});

const addDispCard = (request, response) => {
  const { firstname, profession, contact, email, state } = request.body;

  pool.query(
    'INSERT INTO dispCard (firstname, profession, contact, email, _state) VALUES ($1, $2, $3, $4, $5)',
    [firstname, profession, contact, email, state],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send('DispCard added successfully');
    }
  );
};

const addUser = (request, response) => {
  const { email, password, firstname, lastname } = request.body;

  pool.query(
    'INSERT INTO dispCard (email, password, firstname, lastname) VALUES ($1, $2, $3, $4, $5)',
    [email, password, firstname, lastname],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send('User added successfully');
    }
  );
};

const getDispCard = (request, response) => {

  pool.query("SELECT firstname, profession, _state FROM dispCard ORDER BY RANDOM() LIMIT 1", 
  (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(results.rows);
  });
};

// const getUserById = (request, response) => {
//   const id = parseInt(request.params.id);

//   pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).json(results.rows);
//   });
// };

// const getUserByEmail = (request, response) => {
//   const Email = parseInt(request.params.Email);

//   pool.query("SELECT * FROM users WHERE email = $1", [Email], (error, results) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).json(results.rows);
//   });
// };

// const getUserByState = (request, response) => {
//   const state = parseInt(request.params.state);

//   pool.query("SELECT * FROM dispCard WHERE _State = $1", [state], (error, results) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).json(results.rows);
//   });
// };






// const deleteDispCard = (request, response) => {
//   const cardId = parseInt(request.params.id);

//   pool.query(
//     'DELETE FROM dispCard WHERE id = $1',
//     [cardId],
//     (error, results) => {
//       if (error) {
//         throw error;
//       }
//       response.status(200).send(`DispCard with ID ${cardId} deleted successfully`);
//     }
//   );
// };

module.exports = {
  addDispCard,
  getDispCard,
  addUser,
  // getUserByState,
  // getUserByEmail,
  // deleteDispCard,
  // getUserById,
  // getCard,
};
