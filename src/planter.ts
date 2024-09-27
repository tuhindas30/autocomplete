// Autogenerated by @fig/complete-commander

const completionSpec: Fig.Spec = {
  name: "planter",
  subcommands: [
    {
      name: "create",
      description: "Create a new project using a planter or public repo",
      options: [
        {
          name: ["-f", "--force"],
          description:
            "Force the created directory to overwrite an existing one",
        },
        {
          name: ["-h", "--help"],
          description: "Display help for command",
          priority: 49,
        },
      ],
      args: [
        {
          name: "source",
          description: "The name of a planter or a public repo",
          isOptional: true,
        },
        {
          name: "dir",
          description: "Directory of the new project",
          isOptional: true,
        },
      ],
    },
    {
      name: "list",
      description: "List available planters",
      options: [
        {
          name: ["-a", "--alphanumeric"],
          description: "Sorts list of planters alphanumerically",
        },
        {
          name: ["-h", "--help"],
          description: "Display help for command",
          priority: 49,
        },
      ],
    },
    {
      name: "add",
      description: "Add a planter to your list",
      options: [
        {
          name: ["-L", "--local"],
          description:
            "Treat the location as a local repo instead of a remote repo",
        },
        {
          name: ["-h", "--help"],
          description: "Display help for command",
          priority: 49,
        },
      ],
      args: [
        {
          name: "name",
          description: "Name of the planter to use as a reference",
        },
        { name: "location", description: "The repo URL or name" },
      ],
    },
    {
      name: "edit",
      description: "Edit a planter in your list",
      options: [
        {
          name: ["-n", "--name"],
          description: "Edit the name of a planter",
          args: { name: "new-name" },
        },
        {
          name: ["-l", "--location"],
          description: "Edit the location of a planter",
          args: { name: "location" },
        },
        {
          name: ["-d", "--delete"],
          description: "Remove a planter from your list",
        },
        {
          name: ["-f", "--force"],
          description:
            "Edit something... dangerously. (Force the edit without any prompts.)",
        },
        {
          name: ["-R", "--remote"],
          description: "Set the location type to remote",
        },
        {
          name: ["-L", "--local"],
          description: "Set the location type to local",
        },
        {
          name: ["-h", "--help"],
          description: "Display help for command",
          priority: 49,
        },
      ],
      args: { name: "name", description: "Name of the planter to edit" },
    },
    {
      name: "pin",
      description: "Pins a planter to the top of your list",
      options: [
        {
          name: ["-u", "--unpin"],
          description: "Removes position from the planter",
        },
        {
          name: ["-h", "--help"],
          description: "Display help for command",
          priority: 49,
        },
      ],
      args: [
        { name: "name", description: "Name of the planter to pin" },
        {
          name: "position",
          description:
            "Specific position to set the planter at. (1 being the top of the list.)",
          isOptional: true,
        },
      ],
    },
    {
      name: "info",
      description: "Prints all info about a planter in your list",
      options: [
        {
          name: ["-h", "--help"],
          description: "Display help for command",
          priority: 49,
        },
      ],
      args: {
        name: "name",
        description: "Name of the planter to show info for",
      },
    },
    {
      name: "help",
      description: "Display help for command",
      priority: 49,
      args: { name: "command", isOptional: true, template: "help" },
    },
  ],
  options: [
    { name: ["-V", "--version"], description: "Output the version number" },
    {
      name: ["-h", "--help"],
      description: "Display help for command",
      priority: 49,
    },
  ],
};

export default completionSpec;
