import 'package:flutter_secure_storage/flutter_secure_storage.dart';

class SecureStorageService {
  final _storage = const FlutterSecureStorage();

  // Save access token
  Future<void> saveAccessToken(String token) async {
    await _storage.write(key: 'accessToken', value: token);
  }

  // Retrieve access token
  Future<String?> getAccessToken() async {
    return await _storage.read(key: 'accessToken');
  }

  // Delete access token
  Future<void> deleteAccessToken() async {
    await _storage.delete(key: 'accessToken');
  }

  // Save any key-value pair
  Future<void> saveData(String key, String value) async {
    await _storage.write(key: key, value: value);
  }

  // Retrieve any value by key
  Future<String?> getData(String key) async {
    return await _storage.read(key: key);
  }

  // Delete any key-value pair
  Future<void> deleteData(String key) async {
    await _storage.delete(key: key);
  }
}
