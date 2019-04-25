package fi.monkaS.bloggingsitebackend;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Exception class used when blogpost is not found from database
 */
@ResponseStatus(HttpStatus.NOT_FOUND)
public class BlogpostNotFoundException extends RuntimeException {
    public BlogpostNotFoundException(String e) {
        super(e);
    }
}
