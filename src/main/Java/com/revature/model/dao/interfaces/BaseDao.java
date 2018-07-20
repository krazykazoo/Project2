package com.revature.model.dao.interfaces;

public interface BaseDao<T> {
    public T getById(Integer id);
    public Integer save(T t);
    public void delete(T t);
}
