package fi.monkaS.bloggingsitebackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogpostRepositoryImpl implements BlogpostRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public Blogpost saveEntity(Blogpost entity) {
        return null;
    }

    @Override
    public void deleteById(Long postId) {

    }

    @Override
    public Iterable<Blogpost> findAll() {
        return jdbcTemplate.query("select * from blogpost", new BlogpostRowMapper());
    }

    @Override
    public Blogpost findById(Long postId) {
        List<Blogpost> tmp = jdbcTemplate.query("select * from blogpost where id=" + postId, new BlogpostRowMapper());

        if (tmp.size() > 0)
            return tmp.get(0);
        else
            return null;
    }
}
