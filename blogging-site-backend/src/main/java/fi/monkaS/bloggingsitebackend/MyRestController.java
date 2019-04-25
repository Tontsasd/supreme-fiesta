package fi.monkaS.bloggingsitebackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.Optional;

/**
 * RestController where all the magic happnes.
 */
@RestController
public class MyRestController {

    @Autowired
    BlogpostRepository blogpostRepository;

    /**
     * Method for adding posts to the database
     * @param p Blogpost object that is added to the database
     * @param b Uricomponentsbuilder
     * @return Returns httpstatus CREATED and the blogpost
     */
    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Blogpost> addPost(@RequestBody Blogpost p, UriComponentsBuilder b) {
        blogpostRepository.saveEntity(p);

        UriComponents uriComponents = b.path("/posts/{id}").buildAndExpand(p.getId());
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(uriComponents.toUri());

        return new ResponseEntity<>(p, headers, HttpStatus.CREATED);
    }

    /**
     *
     * @param p Blogpost object that is updated to the database
     * @param b Uricomponentsbuilder
     * @param postId Id of the post in the database
     * @return returns the updated blogpost
     */
    @RequestMapping(value = "/posts/{postId}/edit", method = RequestMethod.POST)
    public ResponseEntity<Blogpost> updatePost(@RequestBody Blogpost p, UriComponentsBuilder b, @PathVariable Long postId) {
        blogpostRepository.update(p, postId);

        UriComponents uriComponents = b.path("/posts/{id}").buildAndExpand(p.getId());
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(uriComponents.toUri());

        return new ResponseEntity<>(p, headers, HttpStatus.OK);
    }

    /**
     * Fetches all blogposts from database
     * @return returns all blogposts
     */
    @RequestMapping(value = "/posts", method = RequestMethod.GET)
    public Iterable<Blogpost> getAllPosts() {
        return blogpostRepository.findAll();
    }

    /**
     * Searches for a single blogpost by id
     * @param postId Id of the post that is searched
     * @return returns the (maybe) found post
     */
    @RequestMapping(value = "/posts/{postId}", method = RequestMethod.GET)
    public Blogpost getPost(@PathVariable Long postId) {
        Optional<Blogpost> b = Optional.ofNullable(blogpostRepository.findById(postId));

        if (!b.isPresent())
            throw new BlogpostNotFoundException("id: " + postId);

        return blogpostRepository.findById(postId);
    }

    /**
     * Deletes a blogpost from database
     * @param postId Id of the deleted blogpost
     * @return just returns httpstatus NO CONTENT
     */
    @RequestMapping(value = "/posts/{postId}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> deletePost(@PathVariable Long postId) {
        blogpostRepository.deleteById(postId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
