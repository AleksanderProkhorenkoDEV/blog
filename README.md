# Blog

> Full-stack blog platform built with Next.js, TypeScript, Docker, Supabase and Prisma.

## Overview

This project is a full-stack blog platform built with **Next.js**, designed with a clear separation between its public content and private management area.

The application uses **Server Components** throughout most of the application and takes advantage of Next.js caching capabilities to optimize content delivery and reduce unnecessary database queries.

The project also provides two different local environments — **development** and **production** — both managed through Docker and a centralized `Makefile`.

### Main features

* Public blog
* Private dashboard
* Role-based access
* Post creation and management
* Rich text editor powered by **Tiptap**
* Image storage with **Supabase Storage**
* Authentication with **Supabase Auth**
* PostgreSQL database through Supabase
* **Prisma ORM**
* Next.js Server Components
* Next.js Cache Components
* Tagged and time-based caching
* Dockerized development and production environments
* Hot reload in development
* Standalone optimized production build

---

## Tech Stack

### Frontend & Application

* **Next.js**
* **React**
* **TypeScript**
* **Tiptap**

### Backend & Data

* **Supabase**

  * PostgreSQL database
  * Authentication
  * Image storage
* **Prisma ORM**

### Infrastructure

* **Docker**
* **Docker Compose**
* **Make**
* **WSL 2 / Ubuntu**

---

## Architecture

The application is divided into two main areas:

```text
                        ┌─────────────────────┐
                        │       Next.js       │
                        │                     │
                        │   Server Components │
                        │   Cache Components  │
                        └──────────┬──────────┘
                                   │
                 ┌─────────────────┴─────────────────┐
                 │                                   │
                 ▼                                   ▼
        ┌─────────────────┐                 ┌─────────────────┐
        │   Public Side   │                 │ Private Side    │
        │                 │                 │                 │
        │ Blog            │                 │ Dashboard       │
        │ Posts           │                 │ Post editor     │
        │ Contact         │                 │ User management │
        └─────────────────┘                 └────────┬────────┘
                                                     │
                                                     ▼
                                            ┌─────────────────┐
                                            │    Supabase     │
                                            │                 │
                                            │ PostgreSQL      │
                                            │ Auth            │
                                            │ Storage         │
                                            └────────┬────────┘
                                                     │
                                                     ▼
                                            ┌─────────────────┐
                                            │     Prisma      │
                                            │      ORM        │
                                            └─────────────────┘
```

The public side is responsible for delivering blog content, while the private side provides the tools required to create and manage posts.

---

## Public & Private Areas

### Public

The public application contains the content that visitors can access without authentication.

Current routes include:

```text
/
├── /blog
├── /blog/[slug]
└── /contacto
```

The blog uses statically generated or cached content where appropriate, reducing the amount of work required for every request.

### Private

The dashboard is protected and provides the administrative functionality required to manage the blog.

```text
/dashboard
```

Access to private functionality is controlled through authentication and user roles.

The dashboard allows authorized users to create and manage posts using a rich text editor based on **Tiptap**.

---

## Authentication & Authorization

Authentication is handled by **Supabase Auth**.

The application also implements role-based access for the private dashboard.

This allows the application to distinguish between authenticated users and users with different levels of permissions.

The general flow is:

```text
User
 │
 ▼
Supabase Auth
 │
 ▼
Authenticated session
 │
 ▼
Role verification
 │
 ├── Public user
 │
 └── Authorized user
          │
          ▼
      Dashboard
```

Authentication, authorization and data access are kept separate so that the dashboard is not simply exposed based on client-side UI state.

---

## Content Management

Posts are created and managed directly from the dashboard.

The editor uses **Tiptap**, providing a structured rich-text editing experience instead of requiring posts to be written directly in source files.

A simplified workflow looks like:

```text
Dashboard
    │
    ▼
Tiptap Editor
    │
    ▼
Post data
    │
    ├──────────────► Supabase Storage
    │                    │
    │                    └── Images
    │
    ▼
Prisma
    │
    ▼
Supabase PostgreSQL
    │
    ▼
Cached Next.js data
    │
    ▼
Public Blog
```

This makes the dashboard function as a lightweight CMS for the blog.

---

## Data Layer

The project uses **Prisma** as its ORM while **Supabase** provides the underlying PostgreSQL database.

This combination provides a typed data-access layer between the Next.js application and the database.

```text
Next.js
   │
   ▼
Prisma
   │
   ▼
PostgreSQL
   │
   ▼
Supabase
```

Supabase is also responsible for services outside the database layer:

* Authentication
* Image/file storage
* PostgreSQL infrastructure

---

# Caching

Caching is an important part of the application's architecture.

Most of the application uses **Server Components**, allowing data fetching to remain on the server and reducing unnecessary client-side JavaScript.

The project also uses Next.js Cache Components and cache primitives such as `cacheLife` and `cacheTag`.

For example, post retrieval is cached with a long lifetime:

```typescript
export const getPosts = async (page: number = 1, limit: number = 10) => {
    'use cache'

    cacheLife('days')
    cacheTag('posts')

    // Fetch posts...
}
```

This means that post data can be reused across requests instead of querying the database every time.

When content changes, cache tags can be used to invalidate the relevant cached data without having to invalidate unrelated parts of the application.

### Why this approach?

The blog contains content that changes relatively infrequently compared to the number of times it may be requested.

Caching therefore allows the application to:

* Reduce database queries
* Improve response times
* Reduce unnecessary server work
* Keep dynamic functionality where it is actually needed
* Revalidate content when posts are updated

---

## Rendering & Revalidation

The production build currently reports the following route behavior:

| Route          | Type    | Revalidate | Expire |
| -------------- | ------- | ---------: | -----: |
| `/`            | Cached  |         1h |     1d |
| `/blog`        | Cached  |         1d |     1w |
| `/blog/[slug]` | Cached  |          — |      — |
| `/confirm`     | Dynamic |          — |      — |
| `/contacto`    | Cached  |          — |      — |
| `/dashboard`   | Dynamic |          — |      — |

The dashboard remains dynamic because it depends on authenticated user state and private data.

Public content, on the other hand, can benefit significantly from caching and revalidation.

---

# Docker

The entire local application runs through Docker.

The project provides two different environments:

```text
Development
    │
    ├── Hot Reload
    ├── Source mounted into container
    └── Optimized for development

Production
    │
    ├── Optimized build
    ├── Standalone Next.js output
    └── Optimized for execution
```

This allows development and production behavior to be tested locally without relying on different host configurations.

---

## Development Environment

The development environment is designed for active development.

It provides:

* Hot reload
* Development server
* Mounted source code
* Fast iteration
* Dockerized dependencies

Start it with:

```bash
make dev
```

Or use the more specific commands:

```bash
make up-dev
make build-dev
make logs-dev
```

---

## Production Environment

The production environment uses an optimized Next.js build and standalone output.

Start the production environment with:

```bash
make prod
```

Other production commands:

```bash
make up-prod
make build-prod
make logs-prod
```

This makes it possible to test the application locally in an environment much closer to the final production runtime.

---

# Makefile

The `Makefile` provides a simple interface over the Docker commands.

Instead of having to remember the underlying Docker Compose commands, the most common operations can be executed through `make`.

### Development

```bash
make dev
```

Start the development environment with hot reload.

```bash
make up-dev
```

Start the development containers.

```bash
make build-dev
```

Build and start the development environment.

```bash
make logs-dev
```

Display development container logs.

### Production

```bash
make prod
```

Start the optimized production environment.

```bash
make up-prod
```

Start production containers.

```bash
make build-prod
```

Build and start the production environment.

```bash
make logs-prod
```

Display production container logs.

### Common commands

```bash
make stop
```

Stop all containers.

```bash
make down
```

Stop and remove all containers.

```bash
make clean
```

Remove containers, volumes and images.

```bash
make help
```

Display all available commands.

---

# Windows + WSL Development

The recommended development setup uses **Windows with Docker** and **WSL 2 with Ubuntu** for the development environment.

The source code lives inside the Linux filesystem and Docker handles the application containers.

```text
┌─────────────────────────────────────────────┐
│                  Windows                    │
│                                             │
│                Docker                       │
│                  │                          │
│                  ▼                          │
│          Docker Containers                  │
│                                             │
│     ┌───────────────────────────────┐       │
│     │            WSL 2              │       │
│     │                               │       │
│     │          Ubuntu               │       │
│     │                               │       │
│     │       Project Source          │       │
│     └───────────────────────────────┘       │
│                                             │
└─────────────────────────────────────────────┘
```

This setup provides a Linux-based development environment while keeping Docker and the host operating system integrated with Windows.

The project has been developed using **Ubuntu 24.04** under WSL.

---

# Getting Started

## Requirements

Before running the project locally, make sure you have:

* Windows
* WSL 2
* Ubuntu 24.04
* Docker Desktop
* Docker Compose
* Make
* Git

The repository should be cloned inside the WSL/Linux filesystem rather than under a Windows-mounted path when possible.

## Clone the repository

```bash
git clone <repository-url>
cd <repository-folder>
```

## Environment variables

Create the required environment file:

```bash
cp .env.example .env
```

Then configure the required Supabase and database variables.

Typical configuration includes values for:

```env
DATABASE_URL=
DIRECT_URL=

NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

> The exact variables depend on the current project configuration. Never commit production credentials or secrets to the repository.

## Development

Run:

```bash
make dev
```

The application will start using the development Docker environment with hot reload enabled.

## Production

To build and run the production environment locally:

```bash
make prod
```

This uses the production configuration and optimized Next.js build.

---

# Project Structure

A simplified representation of the application:

```text
.
├── app/
│   ├── blog/
│   │   └── [slug]/
│   ├── contacto/
│   ├── confirm/
│   ├── dashboard/
│   └── ...
│
├── components/
│   ├── ...
│   └── ...
│
├── lib/
│   ├── ...
│   └── ...
│
├── prisma/
│   └── schema.prisma
│
├── public/
│
├── docker/
│   └── ...
│
├── Dockerfile
├── docker-compose*.yml
├── Makefile
├── package.json
├── pnpm-lock.yaml
└── ...
```

> The structure above is intentionally simplified. The exact organization depends on the current project structure.

---

# Development Philosophy

The project focuses on keeping as much application logic as possible on the server.

Server Components are preferred for data-heavy and content-oriented parts of the application, while client-side components are introduced when interactivity actually requires them.

This approach helps keep the client bundle smaller and makes use of the capabilities provided by the Next.js App Router.

The application combines this architecture with caching, allowing public content to remain fast while still providing dynamic functionality for authenticated users.

---

# Key Technical Concepts

### Server-first architecture

Most of the application uses React Server Components, keeping data fetching and rendering on the server whenever possible.

### Cache Components

Next.js caching primitives are used to cache expensive or frequently requested data.

```typescript
'use cache'

cacheLife('days')
cacheTag('posts')
```

### Role-based dashboard

The application provides a private dashboard with access controlled through authentication and user roles.

### Headless content management

Instead of relying on an external CMS, the project includes its own content management functionality through the dashboard and Tiptap editor.

### Containerized environments

Development and production environments are both reproducible through Docker and controlled through the Makefile.

---

# Future Improvements

Potential areas for future development include:

* Expanded role and permission management
* More advanced content management features
* Additional caching strategies
* Improved media management
* SEO improvements
* Analytics
* Automated testing
* CI/CD improvements
* Additional blog functionality

---

# License

This project is a personal project and its source code is publicly available for educational and portfolio purposes.

---

Built with **Next.js**, **TypeScript**, **Docker**, **Supabase**, **Prisma** and **Tiptap**.
