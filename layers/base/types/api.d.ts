declare namespace API {
  /* 命名空间：响应类型 */
  namespace Response {
    // 默认
    interface Base<T = any> {
      data: T
      code?: number
      message?: string
      error?: {
        name: string
        code: string
        status: number
      }
    }
    // 带Meta的
    interface Meta<T = any> extends Base<T> {
      meta: Pagination.Meta
    }

    // 原始响应
    interface Raw {
      status: number
      _data?: {
        errors?: Array<{
          message?: string
          extensions?: {
            code?: string
          }
        }>
      }
    }
  }

  /* 命名空间：分页处理 */
  namespace Pagination {
    // 分页元数据接口
    interface Meta {
      total_count: number
      filter_count: number
    }
    // 分页状态接口 - 这个是确定会用到的核心分页参数
    interface State {
      page: number
      limit: number
      total: number
    }
  }
}
