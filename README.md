#2200290129009
# Database Schema for Coding Round Web Application

This repository contains the SQL commands necessary to create the database schema for a coding round web application. The database is designed to manage companies, their categories, and various products. These scripts are intended to be used during the testing phase of the web application development process.

## Structure

The database consists of three main tables:

1. **companies**: Stores information about different companies.
2. **category**: Represents product categories and their association with companies.
3. **products**: Contains details of various products, categorized under different categories.

## Schema

### companies
```sql
CREATE TABLE companies (
  company_id INT NOT NULL AUTO_INCREMENT,
  company_name VARCHAR(240) NOT NULL,
  company_description VARCHAR(240) NOT NULL,
  PRIMARY KEY (company_id)
);
```

### category
```sql
CREATE TABLE category (
  id_category INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(240) NOT NULL,
  company_id INT NOT NULL,
  PRIMARY KEY (id_category),
  KEY company_id_idx (company_id),
  CONSTRAINT company_id_fk FOREIGN KEY (company_id) REFERENCES companies (company_id)
);
```

### products
```sql
CREATE TABLE products (
  id_products INT NOT NULL AUTO_INCREMENT,
  name_pro VARCHAR(240) NOT NULL,
  price INT NOT NULL,
  rating INT NOT NULL,
  discount INT NOT NULL,
  availability VARCHAR(240) NOT NULL DEFAULT 'yes',
  category_id INT NOT NULL,
  PRIMARY KEY (id_products),
  KEY category_id_idx (category_id),
  CONSTRAINT category_id_fk FOREIGN KEY (category_id) REFERENCES category (id_category)
);
```
