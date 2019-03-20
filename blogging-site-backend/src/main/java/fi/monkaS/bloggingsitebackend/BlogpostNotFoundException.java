package fi.monkaS.bloggingsitebackend;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class BlogpostNotFoundException extends RuntimeException {
    public BlogpostNotFoundException(String e) {
        super(e);
    }
}
