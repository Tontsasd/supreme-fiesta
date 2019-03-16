package fi.monkaS.bloggingsitebackend;

import java.time.LocalDate;

public class Comment {
    Long id;
    String author;
    String content;
    LocalDate date;
    Long parentId;
}
