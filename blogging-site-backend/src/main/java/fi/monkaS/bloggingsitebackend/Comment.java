package fi.monkaS.bloggingsitebackend;

import java.util.Date;

/**
 * Represents a comment in a blogpost.
 */
public class Comment {
    Long id;
    String author;
    String content;
    Date date;
    Long parentId;

    public Comment() {
    }

    public Comment(Long id, String author, String content, Date date, Long parentId) {
        this.id = id;
        this.author = author;
        this.content = content;
        this.date = date;
        this.parentId = parentId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Long getParentId() {
        return parentId;
    }

    public void setParentId(Long parentId) {
        this.parentId = parentId;
    }
}
