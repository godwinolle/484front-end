from selenium.webdriver.common.by import By

class MainPageLocators(object):
    SIGN_UP_BUTTON = (By.CLASS_NAME, "sign-up-link")
    LOG_IN_BUTTON = (By.CLASS_NAME, "log-in-link")
    
class SearchResultsPageLocators(object):
    pass

class SignUpLocators(object):
    NAME = (By.XPATH, "/html/body/div[1]/div/div/div[1]/form/input[1]")
    EMAIL = (By.XPATH, "/html/body/div[1]/div/div/div[1]/form/input[2]")
    USERNAME = (By.XPATH, "/html/body/div[1]/div/div/div[1]/form/input[3]")
    PASSWORD = (By.XPATH, "/html/body/div[1]/div/div/div[1]/form/input[4]")
    VERIFY_PASSWORD = (By.XPATH, "/html/body/div[1]/div/div/div[1]/form/input[5]")
    CODE = (By.XPATH, "/html/body/div[1]/div/div/div[1]/form/input[6]")
    GO_SIGN_UP = (By.XPATH, "/html/body/div[1]/div/div/div[1]/form/button")

class LogInLocators(object):
    EMAIL = (By.XPATH, "/html/body/div[1]/div/div/div[1]/form/input[1]")
    PASSWORD = (By.XPATH, "/html/body/div[1]/div/div/div[1]/form/input[2]")
    GO_LOG_IN = (By.XPATH, "/html/body/div[1]/div/div/div[1]/form/button")

class HomeScreenLocators(object):
    START_POST = (By.XPATH, "/html/body/div[1]/div/div/div[2]/div[2]/div[1]/form/input")
