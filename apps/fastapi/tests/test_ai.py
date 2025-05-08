import json
import os
import unittest
from unittest.mock import MagicMock, patch

import pytest
from app.lib.ai import Anthropic, OpenAI, Role
from jsonschema.exceptions import ValidationError
from pydantic import BaseModel


class TestAI(unittest.TestCase):
    """Test the AI module."""

    def setUp(self):
        """Set up the test environment."""
        # Set environment variables for testing
        os.environ["ANTHROPIC_API_KEY"] = "test_anthropic_key"
        os.environ["OPENAI_API_KEY"] = "test_openai_key"
        
        self.system_prompt = "You are a helpful assistant."
        self.test_messages = [{"role": "user", "content": "Hello, AI!"}]

    @patch("app.lib.ai.AnthropicClient")
    def test_anthropic_respond(self, mock_anthropic_client):
        """Test the Anthropic.respond method."""
        # Set up the mock
        mock_client_instance = MagicMock()
        mock_anthropic_client.return_value = mock_client_instance
        
        mock_response = MagicMock()
        mock_response.content = [MagicMock(text="Hello, human!")]
        mock_client_instance.messages.create.return_value = mock_response
        
        # Create an instance of Anthropic
        anthropic = Anthropic(system_prompt=self.system_prompt)
        
        # Call the respond method
        response = anthropic.respond(messages=self.test_messages)
        
        # Assert that the client was called with the correct arguments
        mock_client_instance.messages.create.assert_called_once_with(
            system=self.system_prompt,
            messages=self.test_messages,
            model=anthropic.default_model,
            max_tokens=anthropic.max_tokens,
        )
        
        # Assert that the response is correct
        assert response == "Hello, human!"

    @patch("app.lib.ai.AnthropicClient")
    @patch("app.lib.ai.JSON_SYSTEM_PROMPT", "JSON output only")
    def test_anthropic_get_json(self, mock_anthropic_client):
        """Test the Anthropic.get_json method."""
        # Set up the mock
        mock_client_instance = MagicMock()
        mock_anthropic_client.return_value = mock_client_instance
        
        mock_response = MagicMock()
        mock_response.content = [MagicMock(text='{"name": "John", "age": 30}')]
        mock_client_instance.messages.create.return_value = mock_response
        
        # Create an instance of Anthropic
        anthropic = Anthropic(system_prompt=self.system_prompt)
        
        # Define a schema
        schema = {
            "type": "object",
            "properties": {
                "name": {"type": "string"},
                "age": {"type": "number"}
            },
            "required": ["name", "age"]
        }
        
        # Call the get_json method
        response = anthropic.get_json(messages=self.test_messages, schema=schema)
        
        # Assert that the client was called with the correct arguments
        mock_client_instance.messages.create.assert_called_once_with(
            system=self.system_prompt + "JSON output only",
            messages=self.test_messages,
            model=anthropic.default_model,
            max_tokens=anthropic.max_tokens,
        )
        
        # Assert that the response is correct
        assert response == {"name": "John", "age": 30}

    @patch("app.lib.ai.OpenAIClient")
    def test_openai_respond(self, mock_openai_client):
        """Test the OpenAI.respond method."""
        # Set up the mock
        mock_client_instance = MagicMock()
        mock_openai_client.return_value = mock_client_instance
        
        mock_response = MagicMock()
        mock_response.choices = [MagicMock(message=MagicMock(content="Hello, human!"))]
        mock_client_instance.chat.completions.create.return_value = mock_response
        
        # Create an instance of OpenAI
        openai = OpenAI(system_prompt=self.system_prompt)
        
        # Call the respond method
        response = openai.respond(messages=self.test_messages)
        
        # Assert that the client was called with the correct arguments
        mock_client_instance.chat.completions.create.assert_called_once_with(
            messages=[{"role": "system", "content": self.system_prompt}] + self.test_messages,
            model=openai.default_model,
            max_tokens=openai.max_tokens,
        )
        
        # Assert that the response is correct
        assert response == "Hello, human!"

    @patch("app.lib.ai.OpenAIClient")
    def test_openai_get_json(self, mock_openai_client):
        """Test the OpenAI.get_json method."""
        # Set up the mock
        mock_client_instance = MagicMock()
        mock_openai_client.return_value = mock_client_instance
        
        mock_response = MagicMock()
        mock_response.choices = [MagicMock(message=MagicMock(parsed={"name": "John", "age": 30}))]
        mock_client_instance.beta.chat.completions.parse.return_value = mock_response
        
        # Create an instance of OpenAI
        openai = OpenAI(system_prompt=self.system_prompt)
        
        # Define a schema
        class Person(BaseModel):
            name: str
            age: int
        
        # Call the get_json method
        response = openai.get_json(messages=self.test_messages, schema=Person)
        
        # Assert that the client was called with the correct arguments
        mock_client_instance.beta.chat.completions.parse.assert_called_once_with(
            messages=[{"role": "system", "content": self.system_prompt}] + self.test_messages,
            model=openai.default_model,
            max_tokens=openai.max_tokens,
            response_format=Person,
        )
        
        # Assert that the response is correct
        assert response == {"name": "John", "age": 30}