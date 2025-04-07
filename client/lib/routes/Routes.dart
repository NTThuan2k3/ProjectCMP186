import 'package:flutter/material.dart';
import 'package:client/screens/login_page.dart';

class AppRoutes {
  static const String login = '/login';

  static final Map<String, WidgetBuilder> routes = {
    login: (context) => const LoginPage(),
    // Add other routes here
  };
}