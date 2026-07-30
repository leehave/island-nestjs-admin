import request from './_request';

// 查询在线用户分页列表
export const queryOnlinePage = (
  params: PageField & {
    ipaddr?: string;
    userName?: string;
    beginTime?: string;
    endTime?: string;
  },
  options?: { [key: string]: any },
) => {
  return request<API.PostPageResult>('/api/monitor/online/list', {
    method: 'GET',
    params: { ...params },
    ...(options || {}),
  });
};

// 强退在线用户
export const deleteOnline = (tokenId) => {
  return request('/api/monitor/online/' + tokenId, {
    method: 'DELETE',
  });
};

// 查询定时任务列表
export const queryJobPage = (
  params: PageField & {
    jobName?: string;
    jobGroup?: string;
    status?: string;
  },
  options?: { [key: string]: any },
) => {
  return request<API.PostPageResult>('/api/tool/crontab/list', {
    method: 'GET',
    params: { ...params },
    ...(options || {}),
  });
};

// 新增定时任务
export const addJob = (data) => {
  return request('/api/tool/crontab/create', {
    method: 'POST',
    data,
  });
};

// 删除定时任务
export const deleteJob = (jobId) => {
  return request('/api/tool/crontab/delete', {
    method: 'DELETE',
    data: { ids: [jobId] },
  });
};

// 修改定时任务
export const updateJob = (data) => {
  return request('/api/tool/crontab/update/' + data.id, {
    method: 'PUT',
    data,
  });
};

// 定时任务详情
export const getJob = (jobId) => {
  return request('/api/tool/crontab/detail/' + jobId, {
    method: 'GET',
  });
};

// 执行定时任务
export const runJob = (data) => {
  return request('/api/tool/crontab/run/' + data.id, {
    method: 'POST',
    data,
  });
};

// 查询调度日志列表 (tasks)
export const queryJobLogPage = (
  params: PageField & {
    jobName?: string;
    jobGroup?: string;
    status?: string;
    beginTime?: string;
    endTime?: string;
  },
  options?: { [key: string]: any },
) => {
  return request<API.PostPageResult>('/api/tool/crontab/tasks', {
    method: 'GET',
    params: { ...params },
    ...(options || {}),
  });
};

// 清空调度日志
export const cleanJobLog = () => {
  return request('/api/tool/crontab/tasks', {
    method: 'DELETE',
  });
};

// 查询服务状态
export const queryServerInfo = () => {
  return request('/api/core/server/monitor', {
    method: 'GET',
  });
};

// 查询缓存信息
export const queryCacheInfo = () => {
  return request('/api/core/server/redis', {
    method: 'GET',
  });
};

// 查询缓存列表
export const queryCacheList = (params) => {
  return request('/api/core/server/redis/browser/level1', {
    method: 'GET',
    params,
  });
};

// 查询缓存键名列表
export const queryCacheKeyList = (cacheName) => {
  return request('/api/core/server/redis/browser/level2', {
    method: 'GET',
    params: { pattern: cacheName },
  });
};

// 查询缓存键值
export const queryCacheValue = (cacheName, cacheKey) => {
  return request('/api/core/server/redis/browser/level3', {
    method: 'GET',
    params: { pattern: cacheName, key: cacheKey },
  });
};

// 删除缓存
export const deleteCacheKey = (cacheKey) => {
  return request('/api/core/server/redis/browser/delete', {
    method: 'DELETE',
    params: { key: cacheKey },
  });
};

// 清空缓存
export const cleanCache = () => {
  return request('/api/core/server/clear', {
    method: 'POST',
  });
};

// 删除缓存名称
export const deleteCacheName = (cacheName) => {
  return request('/api/core/server/redis/browser/delete', {
    method: 'DELETE',
    params: { pattern: cacheName },
  });
};
