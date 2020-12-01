import unittest
from selenium import webdriver
import page

class PythonOrgSearch(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome("/Users/austinryan/Desktop/chromedriver.exe")
        self.driver.get("https://dev-chatters.herokuapp.com/")

    def test_sign_up_button(self):
        mainPage = page.MainPage(self.driver)
        mainPage.click_sign_up_button()
            

    def test_log_in_button(self):
        mainPage = page.MainPage(self.driver)
        mainPage.click_log_in_button()
        



if __name__ == "__main__":
    unittest.main()