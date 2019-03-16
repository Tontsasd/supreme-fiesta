package fi.monkaS.bloggingsitebackend;

public interface MyRepository<T, ID> {
    T saveEntity(T entity);
    T update(T entity);
    void deleteById(ID id);
    Iterable<T> findAll();
    T findById(ID id);
}
