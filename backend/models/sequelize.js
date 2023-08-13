const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

const sequelize = new Sequelize("KodeMentor", "root", "dave1011", {
  host: "localhost",
  dialect: "mysql",
  define: {
    freezeTableName: true, // disable pluralization
  },
});

const post = sequelize.define(
  "post",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    repo_url: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false, // disable createdAt and updatedAt
  }
);

const user = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    mentor_id: {
      type: DataTypes.INTEGER,
    },
    github_auth: {
      type: DataTypes.BOOLEAN,
    },
    github_url: {
      type: DataTypes.STRING,
    },
    avatar_url: {
      type: DataTypes.STRING,
    },
    created_at: {
      type: DataTypes.STRING,
    },
    access_token: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false, // disable createdAt and updatedAt
  }
);
const review = sequelize.define(
  "review",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    post_id: {
      type: DataTypes.INTEGER,
    },
    review: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false, // disable createdAt and updatedAt
  }
);
const vote = sequelize.define(
  "vote",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    post_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false, // disable createdAt and updatedAt
  }
);
const lk_file_review = sequelize.define(
  "lk_file_review",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    file_id: {
      type: DataTypes.INTEGER,
    },
    review_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false, // disable createdAt and updatedAt
  }
);

const file = sequelize.define(
  "file",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    post_id: {
      type: DataTypes.INTEGER,
    },
    api_url: {
      type: DataTypes.STRING,
    },
    download_url: {
      type: DataTypes.STRING,
    },

    html_url: {
      type: DataTypes.STRING,
    },

    name: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false, // disable createdAt and updatedAt
  }
);
const lk_post_subject = sequelize.define(
  "post_subject",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    subject_id: {
      type: DataTypes.INTEGER,
    },
    post_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false, // disable createdAt and updatedAt
  }
);

module.exports = {
  post,
  review,
  file,
  lk_file_review,
  lk_post_subject,
  user,
  vote,
};
