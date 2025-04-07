import 'dart:convert';
import 'package:http/http.dart' as http;

class ApiService {
  final String baseUrl = 'http://localhost:3000'; // Replace with your API base URL

  // Login user with username, password, and role
  Future<Map<String, String>?> loginUser(
      String username, String password, String role) async {
    final url = Uri.parse('$baseUrl/login');
    final response = await http.post(
      url,
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({
        'username': username,
        'password': password,
        'role': role,
      }),
    );

    if (response.statusCode == 200) {
      final data = jsonDecode(response.body);
      return {'accessToken': data['accessToken']};
    } else {
      print('Login failed: ${response.body}');
      return null;
    }
  }

  // Login with Google
  Future<Map<String, String>?> loginWithGoogle(
      String? displayName, String email) async {
    final url = Uri.parse('$baseUrl/google-login');
    final response = await http.post(
      url,
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({
        'displayName': displayName,
        'email': email,
      }),
    );

    if (response.statusCode == 200) {
      final data = jsonDecode(response.body);
      return {'accessToken': data['accessToken']};
    } else {
      print('Google login failed: ${response.body}');
      return null;
    }
  }
}
