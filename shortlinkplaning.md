# Shortlink Feature Plan

## 1. Feature Overview

A brief description of the shortlink feature. It will allow users to create shortened URLs for products.

## 2. User Stories

- As a user, I want to be able to enter a long URL and get a short URL.
- As a user, I want to be able to click on a short URL and be redirected to the original long URL.
- As a user, I want to be able to see a list of all the short URLs I have created.
- As a user, I want to be able to delete a short URL that I have created.

## 3. Technical Plan

- **Backend:**
    - Use ElysiaJS to create the API endpoints.
    - **Utilize Redis as the primary data store for mapping short codes to original URLs due to its in-memory speed and low latency, crucial for redirects.**
    - **(Optional) Use a persistent database (e.g., PostgreSQL, MySQL) for storing additional metadata about short links (e.g., creation date, user who created it, click analytics) that doesn't require Redis's extreme speed for retrieval.**
    - Generate a unique short code for each URL.
- **Frontend:**
    - Create a simple UI to create and manage short links.

## 4. Data Storage Strategy (replacing "Database Schema")

-   **Redis (Core Mapping)**:
    -   Key: `short_code` (string)
    -   Value: `original_url` (string)
    -   This will allow for extremely fast lookups when redirecting short URLs.

-   **(Optional) Persistent Database (for Metadata and Analytics)**:
    -   **ShortLink table:** (If storing additional metadata beyond the core mapping)
        -   `id` (PK, auto-increment)
        -   `short_code` (string, unique, indexed for fast lookups) - This can be used to link to the Redis entry.
        -   `original_url` (string)
        -   `created_at` (datetime)
        -   `updated_at` (datetime)
        -   `user_id` (FK to User table, if applicable)
        -   `click_count` (integer) - For analytics
        -   ... other relevant metadata

## 5. API Endpoints

- `POST /shortlinks` - Create a new short link.
- `GET /:short_code` - Redirect to the original URL.
- `GET /shortlinks` - Get a list of all short links.
- `DELETE /shortlinks/:id` - Delete a short link.