from locator import *
from element import BasePageElement
from selenium import webdriver

class SearchTextElement(BasePageElement):
    locator = "q"

class BasePage(object):
    def __init__(self,driver):
        self.driver = driver




#Will this title match what we want the title to be
class MainPage(BasePage):

    def is_title_matches(self):
        return "Dev Chatter" in self.driver.title

    def click_sign_up_button(self):
        
        element = self.driver.find_element(*MainPageLocators.SIGN_UP_BUTTON)
        element.click()
        element = self.driver.find_element(*SignUpLocators.NAME)
        element.send_keys('Austin Ryan')
        element = self.driver.find_element(*SignUpLocators.EMAIL)
        element.send_keys('aryan18@students.towson.edu')
        element = self.driver.find_element(*SignUpLocators.USERNAME)
        element.send_keys('testusername1234')
        element = self.driver.find_element(*SignUpLocators.PASSWORD)
        element.send_keys('MyPassword123!')
        element = self.driver.find_element(*SignUpLocators.VERIFY_PASSWORD)
        element.send_keys('MyPassword123!')
        element = self.driver.find.element(*SignUpLocators.CODE)
        element.send_keys('COSC484')
        element = self.driver.find_element(*SignUpLocators.GO_SIGN_UP)
        element.click()


    def click_log_in_button(self):
        element = self.driver.find_element(*MainPageLocators.LOG_IN_BUTTON)
        element.click()
        element = self.driver.find_element(*LogInLocators.EMAIL)
        element.send_keys('testusername1234')
        element = self.driver.find_element(*LogInLocators.PASSWORD)
        element.send_keys('MyPassword123!')
        element = self.driver.find_element(*LogInLocators.GO_LOG_IN)
        element.click()
        element = self.driver.find_element(*HomeScreenLocators.START_POST)
        element.send_keys('Test Post With Python')
        element.RETURN

   
        

    




    
  
