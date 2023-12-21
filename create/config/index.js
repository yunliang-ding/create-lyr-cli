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
          name: "base",
          value: {
            url: "https://github.com/yunliang-ding/lyr-template-base.git",
            gitName: "lyr-template-base",
            val: "React基础版本",
          },
        },
        {
          name: "pro",
          value: {
            url: "https://github.com/yunliang-ding/lyr-template-pro.git",
            gitName: "lyr-template-base",
            val: "React全栈模版",
          },
        },
      ],
    },
  ],
};
