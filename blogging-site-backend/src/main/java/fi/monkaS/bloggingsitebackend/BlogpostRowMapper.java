package fi.monkaS.bloggingsitebackend;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class BlogpostRowMapper implements RowMapper<Blogpost> {
    @Override
    public Blogpost mapRow(ResultSet resultSet, int i) throws SQLException {
        Blogpost blogpost = new Blogpost();
        blogpost.setId(resultSet.getLong("id"));
        blogpost.setAuthor(resultSet.getString("author"));
        blogpost.setContent(resultSet.getString("content"));
        blogpost.setDate(resultSet.getDate("date"));
        blogpost.setTitle(resultSet.getString("title"));

        return blogpost;
    }
}
