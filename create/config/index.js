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
            url: "https://github.com/yunliang-ding/react-base-template.git",
            gitName: "react-base-template",
            val: "基础版本",
          },
        },
        {
          name: "react-core-form-admin",
          value: {
            url: "https://github.com/yunliang-ding/react-core-form-admin.git",
            gitName: "react-core-form-admin",
            val: "全栈开发项目",
          },
        },
      ],
    },
  ],
};