package fi.monkaS.bloggingsitebackend;

import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * Implementation of RowMapper to not repeat code when returning comments.
 */
public class CommentRowMapper implements RowMapper<Comment> {
    @Override
    public Comment mapRow(ResultSet resultSet, int i) throws SQLException {
        Comment comment = new Comment();
        comment.setId(resultSet.getLong("id"));
        comment.setAuthor(resultSet.getString("author"));
        comment.setContent(resultSet.getString("content"));
        comment.setDate(resultSet.getDate("date"));
        comment.setParentId(resultSet.getLong("parentId"));

        return comment;
    }
}
