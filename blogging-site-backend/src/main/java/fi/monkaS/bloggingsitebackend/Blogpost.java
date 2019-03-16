package fi.monkaS.bloggingsitebackend;

import java.time.LocalDate;

public class Blogpost {
    long id;
    String author;
    String title;
    String content;
    LocalDate date;
    String[] tags;
    String[] comments;
}
