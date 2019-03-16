package fi.monkaS.bloggingsitebackend;

import org.springframework.stereotype.Service;

@Service
public class BlogpostRepositoryImpl implements BlogpostRepository {

    @Override
    public Blogpost saveEntity(Blogpost entity) {
        return null;
    }

    @Override
    public void deleteById(Long aLong) {

    }

    @Override
    public Iterable<Blogpost> findAll() {
        return null;
    }

    @Override
    public Blogpost findById(Long aLong) {
        return null;
    }
}
