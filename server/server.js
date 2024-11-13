const app = require('./app');
const sequelize = require('./config/db');
require('dotenv').config();

sequelize.sync();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
