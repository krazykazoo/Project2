package com.revature.model.dao.interfaces;

import java.util.List;

public interface BaseDao<T> {
    public T getById(Integer id);
    public Integer save(T t);
    public void delete(T t);
    public List<T> getAll();
}
