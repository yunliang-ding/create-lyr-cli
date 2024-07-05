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
          name: "lyr-react-web",
          value: {
            url: "https://github.com/yunliang-ding/lyr-react-web.git",
            gitName: "lyr-react-web",
            val: "全栈开发模版",
          },
        },
        {
          name: "lyr-react-docs",
          value: {
            url: "https://github.com/yunliang-ding/lyr-react-docs.git",
            gitName: "lyr-react-docs",
            val: "组件库开发模版",
          },
        },
      ],
    },
  ],
};
