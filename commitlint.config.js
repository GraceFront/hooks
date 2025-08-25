const types = [
  'feat', // 新功能
  'fix', // Bug 修复
  'docs', // 文档更新
  'style', // 代码样式调整
  'refactor', // 代码重构
  'perf', // 性能优化
  'test', // 测试相关
  'build', // 构建系统
  'ci', // CI 配置
  'chore', // 其他杂项
  'revert', // 回滚提交
]

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', types],
  },
}
