# Database Schema Documentation

## Profile Collection

The Profile collection stores user profile information with the following structure:

```json
{
  "_id": "ObjectId",
  "name": "string (required, 2-100 chars)",
  "email": "string (required, unique, valid email format)",
  "education": [
    {
      "degree": "string (required)",
      "branch": "string (required)",
      "college": "string (required)",
      "year": "number (required)"
    }
  ],
  "skills": [
    "string"
  ],
  "projects": [
    {
      "title": "string (required)",
      "description": "string (required)",
      "skills": ["string"],
      "links": {
        "github": "string (optional)",
        "live": "string (optional)"
      }
    }
  ],
  "work": [
    {
      "role": "string (required)",
      "company": "string (required)",
      "duration": "string (required)"
    }
  ],
  "links": {
    "github": "string (optional)",
    "linkedin": "string (optional)",
    "portfolio": "string (optional)"
  },
  "createdAt": "Date (auto-generated)",
  "updatedAt": "Date (auto-generated)"
}
```

## Field Descriptions

### Required Fields
- **name**: User's full name (string, 2-100 characters)
- **email**: User's email address (string, unique, validated format)

### Optional Fields
- **education**: Array of educational background objects
  - **degree**: Degree type (e.g., "Bachelor's", "Master's")
  - **branch**: Field of study (e.g., "Computer Science")
  - **college**: Institution name
  - **year**: Graduation year (number)

- **skills**: Array of skill strings (e.g., ["JavaScript", "React", "Node.js"])

- **projects**: Array of project objects
  - **title**: Project name
  - **description**: Project description
  - **skills**: Array of technologies used
  - **links**: Object containing optional GitHub and live demo URLs

- **work**: Array of work experience objects
  - **role**: Job title
  - **company**: Company name
  - **duration**: Employment period (e.g., "Jan 2022 - Dec 2023")

- **links**: Object containing social/professional links
  - **github**: GitHub profile URL
  - **linkedin**: LinkedIn profile URL
  - **portfolio**: Portfolio website URL

### Auto-generated Fields
- **_id**: MongoDB ObjectId (auto-generated)
- **createdAt**: Document creation timestamp (auto-generated)
- **updatedAt**: Document last modification timestamp (auto-generated)

## Indexes

The schema includes a text index on the following fields for search functionality:
- `name`
- `skills`
- `projects.title`
- `projects.description`
- `projects.skills`

## Validation Rules

1. **Email**: Must be a valid email format and is automatically converted to lowercase
2. **Name**: Required field, trimmed of whitespace
3. **Education entries**: All fields (degree, branch, college, year) are required when education is provided
4. **Project entries**: Title and description are required when projects are provided
5. **Work entries**: Role, company, and duration are required when work experience is provided
6. **All string fields**: Automatically trimmed of leading/trailing whitespace

## Usage Notes

- The application assumes a single profile per database instance
- Search functionality works across name, skills, and project-related fields
- All timestamps are automatically managed by MongoDB
- The schema supports flexible arrays for education, skills, projects, and work experience
