package fi.monkaS.bloggingsitebackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Blogpost repository implementation. Talks with the database, and returns the data
 * get from there.
 */
@Service
public class BlogpostRepositoryImpl implements BlogpostRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;

    /**
     * Saves the entity to database
     * @param entity Entity to be saved
     * @return Returns saved entity if succeeded
     */
    @Override
    public Blogpost saveEntity(Blogpost entity) {
        jdbcTemplate.update("insert into blogpost values (?, ?, ?, ?, ?)", new Object[] {entity.getId(), entity.getAuthor(), entity.getContent(), entity.getDate(), entity.getTitle()});
        return entity;
    }

    /**
     * Updates an entity in the database
     * @param entity Updated entity
     * @param postId Id of the entity in database
     * @return returns updated entity if successful
     */
    @Override
    public Blogpost update(Blogpost entity, Long postId) {
        jdbcTemplate.update("update blogpost set content = ?, title = ? where id =" + postId, new Object[] {entity.getContent(), entity.getTitle()});
        return entity;
    }

    /**
     * Deletes an entity from database
     * @param postId Id of the entity to be deleted.
     */
    @Override
    public void deleteById(Long postId) {
        jdbcTemplate.update("delete from blogpost where id=" + postId);
    }

    /**
     * Fetches all blogposts from database
     * @return returns list by using BlogpostRowMapper which contains all blogposts
     */
    @Override
    public Iterable<Blogpost> findAll() {
        return jdbcTemplate.query("select * from blogpost", new BlogpostRowMapper());
    }

    /**
     * Finds one specific post from database
     * @param postId Id of the blogpost that is searched
     * @return returns found post if successful
     */
    @Override
    public Blogpost findById(Long postId) {
        List<Blogpost> tmp = jdbcTemplate.query("select * from blogpost where id=" + postId, new BlogpostRowMapper());

        if (tmp.size() > 0)
            return tmp.get(0);
        else
            return null;
    }

    @Override
    public Iterable<Blogpost> search(String keyword) {
        return jdbcTemplate.query("select * from blogpost where content like \'" + "%" + keyword + "%" + "\'", new BlogpostRowMapper());
    }
}
