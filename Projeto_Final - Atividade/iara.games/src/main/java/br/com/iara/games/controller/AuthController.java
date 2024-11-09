package br.com.iara.games.controller;

import br.com.iara.games.model.User;
import br.com.iara.games.service.UserService;
import jakarta.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class AuthController {

    @Autowired
    private UserService userService;

    @GetMapping("/login")
    public String showLoginPage() {
        return "login";
    }

    @PostMapping("/login")
    public String login(@RequestParam String username, @RequestParam String password, Model model) {
        User user = userService.findByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            return "redirect:/home";
        }
        model.addAttribute("error", "Invalid username or password");
        return "login";
    }

    @GetMapping("/register")
    public String showRegisterPage() {
        return "register";
    }

    @PostMapping("/register")
    public String register(@RequestParam String username, @RequestParam String password) {
        User newUser = new User();
        newUser.setUsername(username);
        newUser.setPassword(password);
        userService.registerUser(newUser);
        return "redirect:/login";
    }

    @GetMapping("/home")
    public String home() {
        return "home";
    }

    // AuthController.java
    @GetMapping("/logout")
        public String logout(HttpSession session) {
        session.invalidate();  // Invalida a sessão do usuário
        return "redirect:/login";  // Redireciona para a página de login
}

}

