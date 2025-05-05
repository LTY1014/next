## Next

<p align=center>
    <a href="http://gitee.com/liang-tian-yu">Next</a>
</p>
<p align="center">
<a target="_blank" href="http://gitee.com/liang-tian-yu">
    <img src="https://img.shields.io/badge/Next-15.3.1-green" ></img>
    <img src="https://img.shields.io/badge/react-19-green" ></img>
    <img src="https://img.shields.io/badge/tailwindcss-4-blue" ></img>
</a></p>

**Next实现官网站点搭建**



启动命令

```
npm install
npm run dev
```

> 详见请看 package.json



[参考Next官网](https://nextjs.frontendx.cn/)

## 配置

- next.config.ts

env定义

```
    env: {
        PROJECT_NAME: "project name",
        logo: '/logo.png',
    },
```



组件中得到对应值

```
  const projectName = process.env.PROJECT_NAME;
```

