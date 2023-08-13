CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255),
    mentor_id INT,
    github_auth BOOL DEFAULT 0,
    github_url VARCHAR(255),
    avatar_url VARCHAR(255),
    access_token VARCHAR(255),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT uc_username UNIQUE (username)
);

CREATE TABLE mentor (
    id INT PRIMARY KEY AUTO_INCREMENT,
    professional_experience INT,
    user_id INT
);

CREATE TABLE subject (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE post (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    code VARCHAR(255),
    repo_url VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    description VARCHAR(255)
);

CREATE TABLE review (
    id INT PRIMARY KEY AUTO_INCREMENT,
    post_id INT NOT NULL,
    user_id INT NOT NULL,
    review VARCHAR(255),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_review_post FOREIGN KEY (post_id)
        REFERENCES post (id),
    CONSTRAINT fk_review_user FOREIGN KEY (user_id)
        REFERENCES user (id)
);

CREATE TABLE vote (
    id INT PRIMARY KEY AUTO_INCREMENT,
    post_id INT NOT NULL,
    user_id INT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_vote_post FOREIGN KEY (post_id)
        REFERENCES post (id),
    CONSTRAINT fk_vote_user FOREIGN KEY (user_id)
        REFERENCES user (id)
);

CREATE TABLE reaction (
    id INT PRIMARY KEY AUTO_INCREMENT,
    icon VARCHAR(255),
    name VARCHAR(255)
);

CREATE TABLE file (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    download_url VARCHAR(255),
    api_url VARCHAR(255),
    html_url VARCHAR(255),
    user_id INT,
    post_id INT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_file_user FOREIGN KEY (user_id)
        REFERENCES user (id),
    CONSTRAINT fk_file_post FOREIGN KEY (post_id)
        REFERENCES post (id)
);

CREATE TABLE lk_reaction_post (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    post_id INT,
    reaction_id INT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT fk_reaction_post__user FOREIGN KEY (user_id)
        REFERENCES user (id),
    CONSTRAINT fk_reaction_post FOREIGN KEY (reaction_id)
        REFERENCES reaction (id),
    CONSTRAINT fk_post_reaction FOREIGN KEY (post_id)
        REFERENCES post (id)
);

CREATE TABLE lk_post_subject (
    id INT PRIMARY KEY AUTO_INCREMENT,
    post_id INT NOT NULL,
    subject_id INT NOT NULL,
    CONSTRAINT fk_post_subject FOREIGN KEY (post_id)
        REFERENCES subject (id),
    CONSTRAINT fk_subject_post FOREIGN KEY (subject_id)
        REFERENCES post (id)
);

CREATE TABLE lk_mentor_subject (
    id INT PRIMARY KEY AUTO_INCREMENT,
    mentor_id INT,
    subject_id INT,
    experience INT,
    CONSTRAINT fk_mentor_subject FOREIGN KEY (mentor_id)
        REFERENCES mentor (id),
    CONSTRAINT fk_subject_mentor FOREIGN KEY (subject_id)
        REFERENCES subject (id)
);

CREATE TABLE lk_file_review (
    id INT PRIMARY KEY AUTO_INCREMENT,
    file_id INT NOT NULL,
    review_id INT NOT NULL,
    CONSTRAINT fk_file_review FOREIGN KEY (file_id)
        REFERENCES file (id),
    CONSTRAINT fk_review_file FOREIGN KEY (review_id)
        REFERENCES review (id)
);

ALTER TABLE user ADD CONSTRAINT fk_user_mentor FOREIGN KEY (mentor_id) REFERENCES mentor(id);
ALTER TABLE mentor ADD CONSTRAINT fk_mentor_user FOREIGN KEY (user_id) REFERENCES user(id);
