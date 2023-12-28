/*
  @dest: 使用配置文件
 */
module.exports = {
  npmUrl: "https://registry.npmjs.org/shc-cli/latest",
  projectList: [
    {
      type: "list",
      message: "请选择拉取的模版类型:",
      name: "type",
      choices: [
        {
          name: "lyr-react",
          value: {
            url: "https://github.com/yunliang-ding/lyr-react-template.git",
            gitName: "lyr-react-template",
            val: "全栈开发模版",
          },
        },
      ],
    },
  ],
};
