package fi.monkaS.bloggingsitebackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class MyRestController {

    @Autowired
    BlogpostRepository blogpostRepository;

    @RequestMapping()
    public void addPost() {
    }

    @RequestMapping(value = "/posts", method = RequestMethod.GET)
    public Iterable<Blogpost> getAllPosts() {
        return blogpostRepository.findAll();
    }

    @RequestMapping(value = "/posts/{postId}", method = RequestMethod.GET)
    public Blogpost getPost(@PathVariable Long postId) {
        return blogpostRepository.findById(postId);
    }

    @RequestMapping(value = "/posts/{postId}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> deletePost(@PathVariable Long postId) {
        blogpostRepository.deleteById(postId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
