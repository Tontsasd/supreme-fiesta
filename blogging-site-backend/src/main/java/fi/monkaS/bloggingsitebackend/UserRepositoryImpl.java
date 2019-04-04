package fi.monkaS.bloggingsitebackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

@Service
public class UserRepositoryImpl implements UserRepository {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @Override
    public User saveEntity(User entity) {
        return null;
    }

    @Override
    public User update(User entity) {
        return null;
    }

    @Override
    public void deleteById(Long aLong) {

    }

    @Override
    public Iterable<User> findAll() {
        return null;
    }

    @Override
    public User findById(Long aLong) {
        return null;
    }
}
