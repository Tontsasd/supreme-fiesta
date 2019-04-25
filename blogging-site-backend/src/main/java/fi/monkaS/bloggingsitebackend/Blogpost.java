package fi.monkaS.bloggingsitebackend;

import java.util.Arrays;

/**
 * Represents a blogpost from database.
 */
public class Blogpost {

    private Long id;
    private String author;
    private Comment[] comments;
    private String content;
    private String date;
    private String[] tags;
    private String title;

    public Blogpost() {

    }

    public Blogpost(Long id, String author, Comment[] comments, String content, String date, String[] tags, String title) {
        this.id = id;
        this.author = author;
        this.comments = comments;
        this.content = content;
        this.date = date;
        this.tags = tags;
        this.title = title;
    }

    public Blogpost(Long id, String author, String content, String date, String title) {
        this.id = id;
        this.author = author;
        this.content = content;
        this.date = date;
        this.title = title;
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

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Override
    public String toString() {
        return "Blogpost{" +
                "id=" + id +
                ", author='" + author + '\'' +
                ", comments=" + Arrays.toString(comments) +
                ", content='" + content + '\'' +
                ", date=" + date +
                ", tags=" + Arrays.toString(tags) +
                ", title='" + title + '\'' +
                '}';
    }
}
