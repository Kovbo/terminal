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
      "Welcome to Commandor 1962",
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
      "New message from Dmitriy:",
      "Hi! ",
      "Listen, I don't have enough time.",
      "These crazy KGB agents are crazy",
      "Well, we have only one option. We have to stop them. You have to connect to their computer and cancel the process",
      "here is the IP address: 192.188.19.56",
      "Good luck, Dmitiy",
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
      "Welcome to Commandor 1962",
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
      "> connect - establish secure connection with another computer",
      "",
      "> restart - restar the computer",
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
        nextText: 1,
      },
    ],
  },
  {
    id: 6,
    text: [
      "Establishing a secure SSH connection.",
      "Type an IP address to connect:",
    ],
    options: [
      {
        text: "192.188.19.56",
        hide: true,
        nextText: 7,
      },
    ],
  },
  {
    id: 7,
    text: [
      "Establishing a secure SSH connection.",
      ".........................................",
      "Trying to connect to 192.188.19.56",
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
        text: "1234567",
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
    text: ["Successfully authenticated", "Successfully authenticated"],
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
  {
    id: 9,
    text: "You foolishly thought this monster could be slain with a single sword.",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
  {
    id: 10,
    text: "The monster laughed as you hid behind your shield and ate you.",
    options: [
      {
        text: "Restart",
        nextText: -1,
      },
    ],
  },
  {
    id: 11,
    text: "You threw your jar of goo at the monster and it exploded. After the dust settled you saw the monster was destroyed. Seeing your victory you decide to claim this castle as your and live out the rest of your days there.",
    options: [
      {
        text: "Congratulations. Play Again.",
        nextText: -1,
      },
    ],
  },
];
