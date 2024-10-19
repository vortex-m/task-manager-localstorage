const employee = [
  {
    id: 1,
    email: "john.doe@example.com",
    password: "password123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Quarterly Report",
        description: "Compile the financial report for Q3 2024.",
        taskDate: "2024-10-19",
        category: "Finance",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Client List",
        description: "Ensure client list is updated in CRM.",
        taskDate: "2024-10-05",
        category: "Client Relations",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Team Meeting",
        description: "Attend the team meeting for project updates.",
        taskDate: "2024-10-20",
        category: "Meetings",
      },
    ],
  },
  {
    id: 2,
    email: "jane.smith@example.com",
    password: "securepass456",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Develop Marketing Strategy",
        description: "Create a new marketing strategy for product launch.",
        taskDate: "2024-10-21",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Social Media Audit",
        description: "Analyze social media engagement and performance.",
        taskDate: "2024-09-29",
        category: "Social Media",
      },
    ],
  },
  {
    id: 3,
    email: "michael.brown@example.com",
    password: "mypassword789",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Database Migration",
        description:
          "Migrate data from the old system to the new cloud database.",
        taskDate: "2024-10-22",
        category: "IT",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "System Backup",
        description: "Ensure all systems are backed up.",
        taskDate: "2024-10-15",
        category: "IT",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Bug Fixing",
        description: "Fix bugs in the new software release.",
        taskDate: "2024-10-10",
        category: "Development",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Optimize Queries",
        description: "Optimize database queries for faster response.",
        taskDate: "2024-10-20",
        category: "IT",
      },
    ],
  },
  {
    id: 4,
    email: "emily.johnson@example.com",
    password: "passw0rd321",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Product Review",
        description: "Review new product specs before approval.",
        taskDate: "2024-10-23",
        category: "Product Management",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client Feedback",
        description: "Gather client feedback on the latest product update.",
        taskDate: "2024-10-08",
        category: "Client Relations",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Website Design",
        description: "Complete the redesign of the company website.",
        taskDate: "2024-09-30",
        category: "Web Design",
      },
    ],
  },
  {
    id: 5,
    email: "david.wilson@example.com",
    password: "qwerty456",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "SEO Optimization",
        description: "Improve SEO for better search rankings.",
        taskDate: "2024-10-18",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Content Strategy",
        description: "Develop a content strategy for Q4.",
        taskDate: "2024-10-01",
        category: "Content",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Email Campaign",
        description: "Create a new email marketing campaign.",
        taskDate: "2024-10-20",
        category: "Marketing",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@gmail.com",
    password: "admin123",
  },
];

// Local Storage
export const setLocalStorage = () => {
  localStorage.setItem("employee", JSON.stringify(employee));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const admin = JSON.parse(localStorage.getItem("admin"));
  const employee = JSON.parse(localStorage.getItem("employee"));

  return { admin, employee };
};
