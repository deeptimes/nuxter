## Setup

- 填写项目配置信息，用于`/base/app.config.ts`
  ```json [package.json]
  {
    "site": {
      "homepage": "https://nuxter.cn",
      "title": "网站名称",
      "slogan": "Nuxt项目模版",
      "keywords": ["nuxt"],
      "icps": "粤ICP备15031517号"
    }
  }
  ```

## Git command
将本地开发的项目提交到 GitHub 的已有仓库，并替换原有的 `main` 分支内容。以下是详细步骤：

---

### 1. **确认本地项目已完成开发**
确保你本地的项目是你想要提交到 GitHub 的最终版本，并且文件结构、代码等都已经准备好。

---

### 2. **初始化 Git 仓库（如果还没有）**
如果你的本地项目还没有初始化为 Git 仓库，执行以下命令：

```bash
cd /path/to/your/project
git init
```

这会在你的项目文件夹中初始化一个 Git 仓库。

---

### 3. **添加远程仓库**
将你本地的 Git 仓库与 GitHub 上的远程仓库关联起来。执行以下命令：

```bash
git remote add origin git@github.com:deeptimes/nuxter.git
```

> 如果已经添加过远程仓库，可以用以下命令查看是否正确：
> ```bash
> git remote -v
> ```
> 如果远程仓库地址不对，可以用以下命令重新设置：
> ```bash
> git remote set-url origin git@github.com:deeptimes/nuxter.git
> ```

---

### 4. **添加所有文件到暂存区**
将本地项目的所有文件添加到 Git 暂存区：

```bash
git add .
```

---

### 5. **提交本地更改**
提交本地更改到仓库：

```bash
git commit -m "Replace main branch with new project"
```

---

### 6. **强制推送到远程 `main` 分支**
因为你想用本地项目替换原有的 `main` 分支内容，需要强制推送：

```bash
git push origin main --force
```

---

### 7. **验证推送是否成功**
推送完成后，可以登录 GitHub 仓库，检查 `main` 分支是否已经被替换为你的本地项目。

---

### 8. **删除旧的分支（可选）**
如果你不再需要 `dev` 分支，可以在远程删除它：

```bash
git push origin --delete dev
```

---

### 9. **创建新的分支（可选）**
如果你需要一个新的开发分支，可以基于新的 `main` 创建：

```bash
git checkout -b dev
git push origin dev
```
---
