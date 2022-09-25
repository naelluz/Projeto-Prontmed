from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager

navegador = webdriver.Chrome()

navegador.get("http://127.0.0.1:5500/login_prontmed.html")
navegador.find_element(By.ID, 'mail').click()