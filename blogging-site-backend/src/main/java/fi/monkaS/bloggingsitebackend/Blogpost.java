package fi.monkaS.bloggingsitebackend;

import java.time.LocalDate;

public class Blogpost {

    Long id;
    String author;
    Comment[] comments;
    String content;
    LocalDate date;
    String[] tags;
    String title;
}
