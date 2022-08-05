export default [
  {
    id: 1,
    text: [
      "Resume loading...",
      "Version 0.21 beta",
      "PENTIUM S CPU at 133 Mhz",
      "Memory test: 64 MB ok",
      "",
      "Booting from hard drive...",
    ],
    options: [],
  },
  {
    id: 2,
    text: [
      "Welcome to IBM PC 1981",
      "",
      "You have 1 new message.",
      "",
      "Available commands:",
    ],
    options: [
      {
        text: "open",
        nextText: 3,
      },
      {
        text: "help",
        nextText: 5,
      },
      {
        text: "restart",
        nextText: -1,
      },
    ],
  },
  {
    id: 3,
    text: [
      "New message from Anon6282:",
      "",
      "Listen, I don't have enough time.",
      "",
      "These agents are onto me, I'm leaving the city right now.",
      "",
      "They must have your address, too, or they will have it soon.",
      "",
      "The only way to save you and others is to erase the database on their main computer.",
      "This should win us some time.",
      "",
      "I got their IP: 192.168.0.1",
      "",
      "They're just idiots with guns, you won't believe what password they've got))",
      "It's like the easiest.",
      "",
      "Sorry they're here I got to go!",
      "Bggfaaaaaaaaaa",
      "",
      "Available commands:",
    ],
    options: [
      {
        text: "exit",
        nextText: 4,
      },
    ],
  },
  {
    id: 4,
    text: [
      "Welcome to IBM PC 1981",
      "",
      "Type 'help' to list all available commands",
    ],
    options: [
      {
        text: "help",
        hide: true,
        nextText: 5,
      },
    ],
  },
  {
    id: 5,
    text: [
      "Available commands:",
      "",
      "> connect - remotely access another computer",
      "",
      "> restart - restar the computer",
      "",
      "> exit - exit current programm",
    ],
    options: [
      {
        text: "connect",
        hide: true,
        nextText: 6,
      },
      {
        text: "restart",
        hide: true,
        nextText: -1,
      },
      {
        text: "exit",
        hide: true,
        nextText: 2,
      },
    ],
  },
  {
    id: 6,
    text: [
      "Establishing secure SSH connection.",
      "Type an IP address to connect:",
      "",
    ],
    options: [
      {
        text: "exit",
        nextText: 2,
      },
      {
        text: "q",
        hide: true,
        nextText: 2,
      },
      {
        text: "192.168.0.1",
        hide: true,
        nextText: 7,
      },
    ],
  },
  {
    id: 7,
    text: [
      "Establishing secure SSH connection.",
      ".........................................",
      "Trying to connect to 192.168.0.1",
      ".........................................",
      "The server requires a password.",
      "",
      "Please type a password:",
    ],
    options: [
      {
        text: "exit",
        hide: true,
        nextText: 2,
      },
      {
        text: "q",
        hide: true,
        nextText: 2,
      },
      {
        text: "restart",
        hide: true,
        nextText: -1,
      },
      {
        text: "12345",
        hide: true,
        nextText: 8,
      },
      {
        text: "123456",
        hide: true,
        nextText: 8,
      },
      {
        text: "11111",
        hide: true,
        nextText: 8,
      },
      {
        text: "123456789",
        hide: true,
        nextText: 8,
      },
      {
        text: "qwerty",
        hide: true,
        nextText: 8,
      },
      {
        text: "pass",
        hide: true,
        nextText: 8,
      },
      {
        text: "password",
        hide: true,
        nextText: 8,
      },
      {
        text: "1234",
        hide: true,
        nextText: 8,
      },
      {
        text: "123456",
        hide: true,
        nextText: 8,
      },
    ],
  },
  {
    id: 8,
    text: [
      "Successfully authenticated!",
      "",
      "Welcome to MILITEK network.",
      "",
    ],
    options: [
      {
        text: "info",
        nextText: 9,
      },
      {
        text: "help",
        nextText: 10,
      },
      {
        text: "database",
        hide: true,
        nextText: 11,
      },
      {
        text: "exit",
        hide: true,
        nextText: 2,
      },
    ],
  },
  {
    id: 9,
    text: ["Info."],
    options: [
      {
        text: "exit",
        nextText: 8,
      },
    ],
  },
  {
    id: 10,
    text: [
      "Available commands:",
      "",
      "Database - aceess database",
      "",
      "Info - get current info",
      "",
      "Exit - exit from current programm",
      "",
    ],
    options: [
      {
        text: "database",
        hide: true,
        nextText: 11,
      },
      {
        text: "info",
        hide: true,
        nextText: 9,
      },
      {
        text: "exit",
        hide: true,
        nextText: 8,
      },
    ],
  },
  {
    id: 11,
    text: [
      "KGB database setup completed.",
      "",
      "This database stores secret documents and can be accessed only by verified users .",
      "",
      "Please login to the database.",
    ],
    options: [
      {
        text: "login",
        nextText: 12,
      },
      {
        text: "exit",
        nextText: 8,
      },
    ],
  },
  {
    id: 12,
    text: [
      "Integrated Data Store authentication",
      "",
      "Deafault username: root",
      "",
      "Please enter username:",
    ],
    options: [
      {
        text: "root",
        hide: true,
        nextText: 13,
      },
      {
        text: "q",
        hide: true,
        nextText: 8,
      },
      {
        text: "exit",
        hide: true,
        nextText: 8,
      },
    ],
  },
  {
    id: 13,
    text: [
      "Integrated Data Store authentication",
      "",
      "Deafault password: password",
      "",
      "Please enter password:",
    ],
    options: [
      {
        text: "password",
        hide: true,
        nextText: 14,
      },
      {
        text: "q",
        hide: true,
        nextText: 8,
      },
      {
        text: "exit",
        hide: true,
        nextText: 8,
      },
    ],
  },
  {
    id: 14,
    text: [
      ">DB",
      "You have successfully authenticated to Integrated Data Store.",
      "",
      "Welcome root user!",
      "",
      "Available commands:",
    ],
    options: [
      {
        text: "SHOW DATABASES",
        nextText: 15,
      },
      {
        text: "DROP DATABASE",
        nextText: 16,
      },
      {
        text: "exit",
        nextText: 8,
      },
    ],
  },
  {
    id: 15,
    text: [
      ">DB",
      "",
      "Available databases:",
      "",
      "MILITEKSTORE - this database contains top secret military documents, targets and maps.",
      "",
    ],
    options: [
      {
        text: "exit",
        nextText: 14,
      },
    ],
  },
  {
    id: 16,
    text: [
      ">DB",
      "",
      "",
      "CAUTION! EXECUTING THIS COMMAND WILL PERMANENTLY ERRASE THE DATABASE!",
      "",
      "Type database name:",
      "",
    ],
    options: [
      {
        text: "MILITEKSTORE",
        hide: true,
        nextText: 17,
      },
    ],
  },
  {
    id: 17,
    text: [
      ">DB",
      "",
      "Database has been deleted.",
      "All documents are no longer accessable.",
      "",
    ],
    options: [
      {
        text: "exit",
        nextText: 18,
      },
    ],
  },
  {
    id: 18,
    text: [
      "UNAUTHENTICATED ACCESS DETECTED!",
      "UNAUTHENTICATED ACCESS DETECTED!",
      "UNAUTHENTICATED ACCESS DETECTED!",
      "UNAUTHENTICATED ACCESS DETECTED!",
      "UNAUTHENTICATED ACCESS DETECTED!",
      "UNAUTHENTICATED ACCESS DETECTED!",
      "UNAUTHENTICATED ACCESS DETECTED!",
      "UNAUTHENTICATED ACCESS DETECTED!",
      "UNAUTHENTICATED ACCESS DETECTED!",
      "UNAUTHENTICATED ACCESS DETECTED!",
      "UNAUTHENTICATED ACCESS DETECTED!",
      "UNAUTHENTICATED ACCESS DETECTED!",
      "UNAUTHENTICATED ACCESS DETECTED!",
      "UNAUTHENTICATED ACCESS DETECTED!",
      "",
    ],
    options: [
      {
        text: "restart",
        nextText: -1,
      },
    ],
  },
];
