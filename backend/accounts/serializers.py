from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

#User serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

#Register serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}} #extremely important argument

    def create(self, validated_data):
        user = User.objects.create_user(validated_data
        ['username'], validated_data['email'], validated_data['password']) #validating It's the right type of data
        user.save()

        return user

#Login serializer
class LoginSerializer(serializers.Serializer): #we are not dealing with creating models here
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")