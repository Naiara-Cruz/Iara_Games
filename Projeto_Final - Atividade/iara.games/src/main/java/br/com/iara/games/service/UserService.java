package br.com.iara.games.service;

import br.com.iara.games.model.User;
import br.com.iara.games.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public void registerUser(User user) {
        userRepository.save(user);
    }

    public User findByUsername(String username) {
        return userRepository.findByUsername(username).orElse(null);
    }
}

